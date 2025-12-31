type ContentProps = {
  children: React.ReactNode
}

export const Content = ({ children }: ContentProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto p-4">
      {children}
    </div>
  )
}


