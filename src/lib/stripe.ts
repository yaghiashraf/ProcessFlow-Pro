import { loadStripe } from '@stripe/stripe-js'

export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export const redirectToCheckout = async () => {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: 'price_processflow_pro_lifetime',
      }),
    })

    const { sessionId } = await response.json()

    if (!sessionId) {
      throw new Error('No session ID returned')
    }

    const stripe = await stripePromise
    
    if (!stripe) {
      throw new Error('Stripe not loaded')
    }

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    })

    if (error) {
      console.error('Stripe redirect error:', error)
      throw error
    }
  } catch (error) {
    console.error('Error redirecting to checkout:', error)
    throw error
  }
}