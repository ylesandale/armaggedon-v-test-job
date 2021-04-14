interface State {
  dangerousOnly: boolean;
  distance: {
    kilometers: boolean;
    lunar: boolean;
  };
  pagination: number;
  cart: any[];
  modalCart: boolean;
}

interface StateSelector {
  app: State;
}
