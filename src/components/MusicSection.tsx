export const MusicSection = () => {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-4xl font-bungee text-magenta mb-12 text-center">Music That Keeps Me Coding</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden border-2 border-sunny shadow-[0_0_15px_rgba(255,229,102,0.5)]">
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="450"
            style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', background: 'transparent' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/lk/playlist/i-love-you-so/pl.u-KVXBklLuLAyJ51W"
          />
        </div>

        <div className="rounded-xl overflow-hidden border-2 border-neon shadow-[0_0_15px_rgba(0,255,221,0.5)]">
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="450"
            style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', background: 'transparent' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/lk/playlist/favorite-songs/pl.u-JjULdbeRlA"
          />
        </div>
      </div>
    </section>
  );
};