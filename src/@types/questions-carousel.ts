export interface InfiniteRowProps {
    questions: string[]
    direction: "left" | "right"
    speed?: number
    pauseOnHover?: boolean
  }
  
  export interface QuestionsCarouselProps {
    title?: string
    rowCount?: number
    speed?: number
    pauseOnHover?: boolean
  }
  
  