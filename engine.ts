import { EngineItem, EngineLocalization, EngineData } from 'sonolus-core'

export const EngineItemData: EngineItem = {
  name: 'pjsekai',
  version: '1.0',
  title: {
    en: 'Genghis Khan',
    ja: 'チンギス=ハン'
  },
  author: {
    en: 'itx42',
    ja: 'itx42'
  },
  description: {
    en: 'A certain Sekai',
    ja: '某セカイ'
  },
  thumbnailUrl: '/engine/pjsekai/thumbnail.webp'
}

export const EngineLocalizationData: EngineLocalization = {
  strings: []
}

export const EngineData: EngineData = {
  item: EngineItemData,
  data: {
    scriptUrl: '/engine/pjsekai/script.js',
    configurationUrl: '/engine/pjsekai/configuration.json',
    previewUrl: '/engine/pjsekai/preview.mp3',
    thumbnailUrl: '/engine/pjsekai/thumbnail.webp',
  },
  localization: EngineLocalizationData
}
