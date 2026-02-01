'use client';

import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="relative">
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-4">
        {categories.map((category, index) => {
          const isSelected = category === selectedCategory;

          return (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectCategory(category)}
              className={`relative whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {/* Selected indicator */}
              {isSelected && (
                <motion.div
                  layoutId="category-indicator"
                  className="absolute inset-0 rounded-full bg-slate-900"
                  style={{ zIndex: -1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">{category}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
