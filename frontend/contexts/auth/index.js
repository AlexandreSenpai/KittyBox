import { createContext, useEffect, useState } from "react"
import { useSession } from "next-auth/client"

export const AuthContext = createContext()

export default function Context({ children }) {
  const [session, loading] = useSession()

  return (
    <AuthContext.Provider
      value={{
        userSession: session,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
