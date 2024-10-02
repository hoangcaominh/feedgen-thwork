import { Record } from "../lexicon/types/app/bsky/feed/post"

const predThJa = (text: string) => {
  const keywords = [
    "ミス", "ボム", "コン", "クリア",
    "機体"
  ]

  return text.includes("東方") && keywords.some(keyword => text.includes(keyword))
}

const predThEn = (text: string) => {
  const keywords = [
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
