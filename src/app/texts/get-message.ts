let lastPickedIndex = 0;

const MESSAGES = [
  'Hello World!',
  '#ViewTransitionRocks',
  'All hail to SPAs!',
  'Lets Go DevDays!',
];

export function getMessage(): string {
  return MESSAGES[lastPickedIndex++ % MESSAGES.length];
}
