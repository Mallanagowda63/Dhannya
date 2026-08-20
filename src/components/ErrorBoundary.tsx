import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  override state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught React ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  private handleGoHome = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F4ECD8] flex items-center justify-center p-6 text-[#2A2620] font-sans">
          <div className="kraft-card bg-[#F8F3E6] border border-[#2A2620]/20 rounded-2xl p-8 max-w-lg w-full shadow-xl text-center space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-[#7C2A1E]/10 text-[#7C2A1E] flex items-center justify-center mx-auto shadow-inner">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl font-bold font-serif text-[#2A2620]">This page wandered away from the kitchen</h2>
              <p className="text-xs text-[#2A2620]/75 mt-2 leading-relaxed">
                An unexpected error occurred while processing your request. Don't worry, your basket and saved data are completely safe!
              </p>
            </div>

            {this.state.error && (
              <div className="bg-[#2A2620]/5 p-3 rounded-xl border border-[#2A2620]/10 text-left overflow-x-auto max-h-32 text-[11px] font-mono text-[#7C2A1E]">
                {this.state.error.toString()}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="w-full sm:w-auto bg-[#3E4B32] hover:bg-[#2A2620] text-[#F4ECD8] font-bold px-5 py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 shadow-sm transition active:scale-95 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 text-[#E8B93E]" />
                <span>Reload Kitchen</span>
              </button>
              <button
                onClick={this.handleGoHome}
                className="w-full sm:w-auto bg-[#F4ECD8] hover:bg-[#F8F3E6] border border-[#2A2620]/20 text-[#2A2620] font-bold px-5 py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer"
              >
                <Home className="w-4 h-4 text-[#3E4B32]" />
                <span>Return to Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
