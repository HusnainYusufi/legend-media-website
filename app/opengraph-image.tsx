import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Legend Media - Web & App Development Agency';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, #e5e7eb 2%, transparent 0%), radial-gradient(circle at 75px 75px, #e5e7eb 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(5,150,105,0.1) 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '80px',
          }}
        >
          {/* Logo/Icon placeholder */}
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              marginBottom: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '60px',
            }}
          >
            🍃
          </div>

          {/* Company Name */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#0F172A',
              marginBottom: '24px',
              textAlign: 'center',
            }}
          >
            Legend<span style={{ color: '#10B981' }}>.</span>Media
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: '32px',
              color: '#64748B',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Award-Winning Web & App Development
          </p>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '60px',
              marginTop: '40px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#10B981' }}>500+</div>
              <div style={{ fontSize: '18px', color: '#64748B' }}>Projects</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#10B981' }}>450+</div>
              <div style={{ fontSize: '18px', color: '#64748B' }}>Clients</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#10B981' }}>8+</div>
              <div style={{ fontSize: '18px', color: '#64748B' }}>Years</div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

