interface TernaryObject<I, E> {
  condition: boolean;
  onIf: () => I;
  onElse: () => E;
}

export const callTernary = <I, E>({
  condition,
  onIf,
  onElse
}: TernaryObject<I, E>) => (condition ? onIf() : onElse());
