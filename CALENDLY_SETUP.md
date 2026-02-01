# Calendly Integration Setup

## Environment Variable Setup

Create a `.env.local` file in the root directory with the following:

```env
NEXT_PUBLIC_CALENDERLY_URL=https://calendly.com/your-username/consultation
```

Replace `your-username/consultation` with your actual Calendly booking URL.

## How It Works

1. **User Journey:**
   - User clicks "Book a Meeting" button (in Header or CTA section)
   - Multi-step modal opens with 3 steps:
     - **Step 1:** Select service type(s) (multiple selection)
     - **Step 2:** Select business category (single selection)
     - **Step 3:** Review summary and confirm

2. **Calendly Integration:**
   - User selections are passed as URL parameters to Calendly
   - Service types → `a1` parameter
   - Business category → `a2` parameter
   - UTM tracking included for analytics

3. **Calendly Setup:**
   - Create custom questions in your Calendly event:
     - **Question 1:** "What service do you need?" (matches `a1`)
     - **Question 2:** "What's your business category?" (matches `a2`)
   - These will be pre-filled based on user selections

## Features

✅ Beautiful 3-step onboarding flow  
✅ Multi-select services  
✅ Single-select business category  
✅ Animated transitions  
✅ Progress bar  
✅ Selection summary  
✅ Responsive design  
✅ Keyboard navigation (ESC to close)  
✅ UTM tracking  
✅ Prefilled Calendly data  

## Testing

1. Set your Calendly URL in `.env.local`
2. Run `npm run dev`
3. Click any "Book a Meeting" button
4. Complete the 3-step form
5. Verify Calendly opens with prefilled data

