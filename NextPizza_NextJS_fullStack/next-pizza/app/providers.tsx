'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

export function Providers({ children }: { children: ReactNode }) { 
  const [queryClient] = useState(// при рендорах не содаются новые QueryClient, 
                                 // остается старый и хронит старый кэш.
                                 // Новый объект появится только если компонент размонтируется и смонтируется заново
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 минут
            gcTime: 1000 * 60 * 10, // хранить кэш 10 минут
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}