/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, PropsWithChildren, ReactNode } from 'react';

type TProps = { fallback: ReactNode } & PropsWithChildren;

type TState = {
  hasError: boolean;
};

export class WithErrorBoundary extends Component<TProps, TState> {
  constructor(props: any) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
