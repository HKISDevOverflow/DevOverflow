import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import style from "../styles/login.module.css"
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

export default function Login() {
  const session = useSession()
  const supabase = useSupabaseClient()
  const router = useRouter()

  return (
    <div className={style['full']}>
      <div className={style["container"]} style={{ padding: '50px 0 100px 0' }}>
        {!session ? (
          <div className={style.contain}>
              <h1 className={style.title}>Login to DevOverflow</h1>
              <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} 
              // providers={[]}
              theme="dark" />
          </div>
        ) : (
          <p>Account page will go here.</p>
        )}
      </div>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx)
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if(session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      initialSession: session,
    }
  }
}