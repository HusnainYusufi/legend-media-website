'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorType = 'default' | 'button' | 'link' | 'heading' | 'project' | 'input';

export function CustomCursor() {
  // Check if device is mobile/tablet BEFORE any rendering
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent flash
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<CursorType>('default');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Determine cursor type based on element
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for buttons (CTA, navigation, etc.)
      if (target.closest('button, [role="button"]')) {
        setCursorType('button');
      }
      // Check for project cards/images
      else if (target.closest('[data-cursor="project"], .project-card, img')) {
        setCursorType('project');
      }
      // Check for headings
      else if (target.closest('h1, h2, h3, h4, h5, h6')) {
        setCursorType('heading');
      }
      // Check for inputs
      else if (target.closest('input, textarea')) {
        setCursorType('input');
      }
      // Check for links
      else if (target.closest('a')) {
        setCursorType('link');
      }
      // Default
      else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  // Check for mobile/tablet on mount
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 768; // Less than md breakpoint
    
    if (isTouchDevice || isSmallScreen) {
      setIsMobile(true);
      setIsVisible(false);
    } else {
      setIsMobile(false);
    }
  }, []);

  // Don't render anything on mobile
  if (isMobile) return null;
  
  if (!isVisible) return null;

  // Define cursor properties for each type (Brand theme: Green/Emerald)
  const getCursorProps = () => {
    switch (cursorType) {
      case 'button':
        return {
          size: 80,
          innerSize: 60,
          borderWidth: 3,
          borderColor: '#10B981', // Green-600
          backgroundColor: 'rgba(16, 185, 129, 0.15)',
          showText: true,
          text: 'CLICK',
          textColor: '#10B981',
        };
      case 'link':
        return {
          size: 60,
          innerSize: 40,
          borderWidth: 2,
          borderColor: '#34D399', // Green-400 (Accent)
          backgroundColor: 'rgba(52, 211, 153, 0.1)',
          showText: true,
          text: 'VIEW',
          textColor: '#34D399',
        };
      case 'heading':
        return {
          size: 100,
          innerSize: 0,
          borderWidth: 2,
          borderColor: '#059669', // Emerald-600
          backgroundColor: 'rgba(5, 150, 105, 0.08)',
          showText: false,
          text: '',
          textColor: '#059669',
        };
      case 'project':
        return {
          size: 120,
          innerSize: 0,
          borderWidth: 3,
          borderColor: '#10B981', // Green-600
          backgroundColor: 'rgba(16, 185, 129, 0.12)',
          showText: true,
          text: 'EXPLORE',
          textColor: '#10B981',
        };
      case 'input':
        return {
          size: 50,
          innerSize: 30,
          borderWidth: 2,
          borderColor: '#34D399', // Green-400 (Light Green)
          backgroundColor: 'rgba(52, 211, 153, 0.1)',
          showText: false,
          text: '',
          textColor: '#34D399',
        };
      default:
        return {
          size: 48,
          innerSize: 12,
          borderWidth: 2,
          borderColor: '#10B981',
          backgroundColor: 'rgba(16, 185, 129, 0.05)',
          showText: false,
          text: '',
          textColor: '#10B981',
        };
    }
  };

  const props = getCursorProps();

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: props.size,
            height: props.size,
            borderColor: props.borderColor,
            borderWidth: props.borderWidth,
            backgroundColor: props.backgroundColor,
          }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
          className="rounded-full border backdrop-blur-sm"
          style={{
            boxShadow: `0 0 ${cursorType === 'default' ? '15' : '30'}px ${props.borderColor}40`,
          }}
        />
      </motion.div>

      {/* Text label */}
      {props.showText && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="pointer-events-none fixed left-0 top-0 z-[9999]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
        >
          <span
            className="text-xs font-bold tracking-wider"
            style={{ color: props.textColor }}
          >
            {props.text}
          </span>
        </motion.div>
      )}

      {/* Inner dot */}
      {props.innerSize > 0 && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[9999]"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
        >
          <motion.div
            animate={{
              width: props.innerSize,
              height: props.innerSize,
              backgroundColor: props.borderColor,
            }}
            transition={{ duration: 0.3 }}
            className="rounded-full"
            style={{
              boxShadow: `0 0 20px ${props.borderColor}80`,
            }}
          />
        </motion.div>
      )}

      {/* Trailing particles effect for buttons */}
      {cursorType === 'button' && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="pointer-events-none fixed left-0 top-0 z-[9998]"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: '-50%',
                translateY: '-50%',
              }}
            >
              <motion.div
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeOut',
                }}
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: props.borderColor,
                }}
              />
            </motion.div>
          ))}
        </>
      )}
    </>
  );
}

