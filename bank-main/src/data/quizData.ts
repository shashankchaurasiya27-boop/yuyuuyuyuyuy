export interface Question {
  id: string;
  lesson: string;
  type: 'mcq' | 'activity';
  activityType?: 'needs_wants' | 'safety_choice' | 'budget_choice';
  text: string;
  answers?: string[];
  correctIndex?: number;
  options?: { text: string; safe: boolean }[];
  items?: { name: string; type: 'need' | 'want' }[];
  explanation?: string;
}

export const QUIZ_DATA: Question[] = [
  // Lesson 1: Banks & Accounts
  {
    id: 'l1_q1',
    lesson: 'banks_accounts',
    type: 'mcq',
    text: 'What does a bank do with your money?',
    answers: ['Keeps it safe', 'Throws it away', 'Eats it', 'Hides it in a tree'],
    correctIndex: 0,
    explanation: 'Banks keep your money safe in a vault or digital system until you need it.'
  },
  {
    id: 'l1_q2',
    lesson: 'banks_accounts',
    type: 'mcq',
    text: 'What is it called when you put money INTO your account?',
    answers: ['Withdrawal', 'Deposit', 'Robbery', 'Gift'],
    correctIndex: 1,
    explanation: 'Deposit means putting money IN. Withdraw means taking money OUT.'
  },
  {
    id: 'l1_q3',
    lesson: 'banks_accounts',
    type: 'mcq',
    text: 'What machine lets you take cash out of the bank anytime?',
    answers: ['Vending Machine', 'ATM', 'Time Machine', 'Washing Machine'],
    correctIndex: 1,
    explanation: 'ATM stands for Automated Teller Machine. It gives you cash from your account.'
  },
  
  // Lesson 2: Interest & Savings
  {
    id: 'l2_q1',
    lesson: 'interest_savings',
    type: 'mcq',
    text: 'Why does the bank give you Interest?',
    answers: ['Because they like your shoes', 'As a reward for saving', 'By mistake', 'To make your wallet heavy'],
    correctIndex: 1,
    explanation: 'Interest is a reward the bank pays you for keeping money with them.'
  },
  {
    id: 'l2_q2',
    lesson: 'interest_savings',
    type: 'mcq',
    text: 'If you save 100 coins and get 5 coins interest, how much do you have?',
    answers: ['95 coins', '100 coins', '105 coins', '500 coins'],
    correctIndex: 2,
    explanation: '100 (savings) + 5 (interest) = 105 coins! Your money grew!'
  },
  {
    id: 'l2_q3',
    lesson: 'interest_savings',
    type: 'mcq',
    text: 'Does spending all your money help you earn interest?',
    answers: ['Yes, spending is good', 'No, you only earn interest on SAVINGS', 'Maybe', 'Only on Tuesdays'],
    correctIndex: 1,
    explanation: 'You only earn interest on money you KEEP in the bank, not money you spend.'
  },
  
  // Lesson 3: Digital Payments
  {
    id: 'l3_q1',
    lesson: 'digital_payments_cards',
    type: 'activity',
    activityType: 'safety_choice',
    text: 'Your friend asks for your PIN. What do you do?',
    options: [
      { text: 'Give them the PIN', safe: false },
      { text: 'Say NO and keep it secret', safe: true }
    ],
    explanation: 'Never share your PIN! It is the key to your money.'
  },
  {
    id: 'l3_q2',
    lesson: 'digital_payments_cards',
    type: 'mcq',
    text: 'What is an OTP?',
    answers: ['Only To Play', 'One Time Password (Secret!)', 'Orange Tomato Pizza', 'Open The Piggybank'],
    correctIndex: 1,
    explanation: 'OTP stands for One Time Password. It is a secret code sent to your phone.'
  },
  {
    id: 'l3_q3',
    lesson: 'digital_payments_cards',
    type: 'activity',
    activityType: 'safety_choice',
    text: 'You get a text: "You won a prize! Click here to claim!"',
    options: [
      { text: 'Click it immediately!', safe: false },
      { text: 'Ignore and Delete (It might be a scam)', safe: true }
    ],
    explanation: 'Strangers sending links is often a trick (scam) to steal your info. Stay safe!'
  },
  
  // Lesson 4: Budgeting
  {
    id: 'l4_q1',
    lesson: 'budgeting_needs_wants',
    type: 'activity',
    activityType: 'needs_wants',
    text: 'Sort these items!',
    items: [
      { name: 'Water', type: 'need' },
      { name: 'Video Game', type: 'want' },
      { name: 'Medicine', type: 'need' },
      { name: 'Candy', type: 'want' }
    ],
    explanation: 'Needs are essential for life. Wants are just for fun.'
  },
  {
    id: 'l4_q2',
    lesson: 'budgeting_needs_wants',
    type: 'mcq',
    text: 'What is a Budget?',
    answers: ['A type of bird', 'A plan for your money', 'A broken gadget', 'A bank account'],
    correctIndex: 1,
    explanation: 'A budget is a plan that helps you decide how to spend and save your money.'
  },
  {
    id: 'l4_q3',
    lesson: 'budgeting_needs_wants',
    type: 'mcq',
    text: 'You have 10 coins. A toy costs 9. Should you buy it if you need lunch?',
    answers: ['Yes, toys are fun', 'No, buy lunch (Need) first', 'Steal it', 'Cry'],
    correctIndex: 1,
    explanation: 'Always take care of your NEEDS (like food) before buying WANTS.'
  },

  // Lesson 5: Loans (NEW)
  {
    id: 'l5_q1',
    lesson: 'basics_loans',
    type: 'mcq',
    text: 'What does it mean to take a Loan?',
    answers: ['The bank gives you free money', 'You borrow money and pay it back later', 'You steal money', 'You win a prize'],
    correctIndex: 1,
    explanation: 'A loan is borrowed money that must be returned.'
  },
  {
    id: 'l5_q2',
    lesson: 'basics_loans',
    type: 'mcq',
    text: 'What is the extra money you pay back called?',
    answers: ['Tip', 'Interest', 'Bonus', 'Tax'],
    correctIndex: 1,
    explanation: 'When you borrow, you pay Interest as a fee for using the bank\'s money.'
  },

  // Final Quiz
  {
    id: 'fq_1',
    lesson: 'final_quiz',
    type: 'mcq',
    text: 'Which is a NEED?',
    answers: ['New Toy', 'Healthy Lunch', 'Cool Stickers', 'Video Game'],
    correctIndex: 1
  },
  {
    id: 'fq_2',
    lesson: 'final_quiz',
    type: 'mcq',
    text: 'Is it safe to write your PIN on your card?',
    answers: ['Yes', 'No! Never write it down', 'Only in pencil', 'If I write it small'],
    correctIndex: 1
  },
  {
    id: 'fq_3',
    lesson: 'final_quiz',
    type: 'mcq',
    text: 'What happens to money in a savings account?',
    answers: ['It disappears', 'It earns Interest', 'It turns into chocolate', 'Nothing'],
    correctIndex: 1
  },
  {
    id: 'fq_4',
    lesson: 'final_quiz',
    type: 'mcq',
    text: 'Who should know your PIN?',
    answers: ['My best friend', 'My teacher', 'Only ME (and maybe parents)', 'Everyone'],
    correctIndex: 2
  },
  {
    id: 'fq_5',
    lesson: 'final_quiz',
    type: 'mcq',
    text: 'What should you do before buying a big expensive toy?',
    answers: ['Buy it now!', 'Save money for it', 'Ask a stranger', 'Forget it'],
    correctIndex: 1
  }
];
