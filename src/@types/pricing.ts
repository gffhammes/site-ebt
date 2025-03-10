export interface PricingFeature {
    text: string
    available: boolean
  }
  
  export interface PricingPlan {
    id: string
    title: string
    price: string
    period: string
    color: string
    recommended: boolean
    additionalInfo: string
  }
  
  