import { serve } from 'sonolus-express'

export default serve({
  levels: [],
  engine: {
    item: {
      name: 'pjsekai',
      version: '1.0',
      title: { en: 'Project Sekai Engine', ja: 'プロセカエンジン' },
      author: { en: 'You', ja: 'あなた' },
      description: { en: '', ja: '' },
      thumbnailUrl: '/engine/pjsekai/thumbnail.webp',
    },
    data: {
      scriptUrl: '/engine/pjsekai/script.js',
      configurationUrl: '/engine/pjsekai/configuration.json',
      thumbnailUrl: '/engine/pjsekai/thumbnail.webp',
      previewUrl: '/engine/pjsekai/preview.mp3',
    },
    localization: { strings: [] },
  }
})
