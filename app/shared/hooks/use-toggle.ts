import { useReducer, useCallback } from 'react';

type ToggleState = {
  readonly isToggled: boolean;
};

const TOGGLE_ACTION = 'TOGGLE';

type ToggleAction = { type: typeof TOGGLE_ACTION };

const toggleReducer = (state: ToggleState, action: ToggleAction): ToggleState => {
  switch (action.type) {
    case TOGGLE_ACTION:
      return { isToggled: !state.isToggled };
    default:
      return state;
  }
};

type ToggleHookResult = [boolean, () => void];

function useToggle(initialState: boolean = false): ToggleHookResult {
    const [state, dispatch] = useReducer(toggleReducer, { isToggled: initialState });

    const handleToggle = useCallback(() => {
      dispatch({ type: TOGGLE_ACTION });
    }, []);
  
    return [state.isToggled, handleToggle];
}

export { useToggle };
