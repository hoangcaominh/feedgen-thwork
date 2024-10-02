import { Record } from "../lexicon/types/app/bsky/feed/post"

const predThJa = (text: string) => {
  const keywords = [
    "紅", "妖", "永", "花", "風", "地", "星", "大", "神", "輝",
    "弾幕", "アマノジャク", "紺", "天", "鬼", "虹", "獣",
    "ミス", "ボム", "コン", "アイテム", "クリア",
    "機体",
    "究極反則生命体"
  ]

  return text.includes("東方") && keywords.some(keyword => text.includes(keyword))
}

const predThEn = (text: string) => {
  const keywords = [
    "hrtp", "soew", "podd", "lls", "ms", "eosd", "pcb", "in", "pofv", "mof",
    "sa", "ufo", "gfw", "td", "ddc", "isc", "lolk", "hsifs", "wbawc", "um", "udoalg",
    "easy", "normal", "hard", "lunatic", "extra", "phantasm",
    "miss", "bomb", "nn", "nm", "nb", "nc", "clear", "cc"
  ]

  return text.includes("touhou") && keywords.some(keyword => text.includes(keyword))
}

export const customIndexer = (record: Record) => {
  const preds = [
    predThJa,
    predThEn
  ]
  
  return preds.reduce((val, pred) => val ||= pred(record.text.toLowerCase()), false);
}
