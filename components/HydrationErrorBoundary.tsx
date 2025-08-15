"use client";

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class HydrationErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Only log hydration errors in development
    if (process.env.NODE_ENV === 'development' && error.message.includes('hydration')) {
      console.warn('Hydration error caught:', error.message);
      console.warn('This is likely caused by browser extensions or dynamic content');
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 text-center">
          <p className="text-gray-600">Content is loading...</p>
        </div>
      );
    }

    return this.props.children;
  }
}
