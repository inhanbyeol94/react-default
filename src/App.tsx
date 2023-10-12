import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import AppRouter from "./router/App.router";

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter/>
    </QueryClientProvider>
  );
}

export default App;
