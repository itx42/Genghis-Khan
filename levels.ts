import { Level } from 'sonolus-express'

export const levels: Level[] = [
  {
    item: {
      name: 'dakishimerumade',
      version: '1.0',
      title: {
        en: 'Dakishimeru Made.',
        ja: 'だきしめるまで。'
      },
      artist: 'MIMI',
      author: 'itx42',
      description: {
        en: '',
        ja: ''
      },
      engine: 'pjsekai',
      coverUrl: '/levels/dakishimerumade/cover.webp'
    },
    data: {
      songUrl: '/levels/dakishimerumade/song.mp3',
      chartUrl: '/levels/dakishimerumade/chart.json',
      backgroundUrl: '/levels/dakishimerumade/bg.jpg',
      preview: {
        start: 10,
        duration: 15
      }
    }
  }
]
