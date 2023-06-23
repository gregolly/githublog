import { NavLink } from 'react-router-dom'
import { BuildingIcon } from '../../../../components/icons/BuildingIcon'
import { GithubIcon } from '../../../../components/icons/GIthubIcon'
import { UserGroupIcon } from '../../../../components/icons/UserGroupIcon'
import { ContentContainer, ListInfo, ProfileWrapper } from './style'
import { OutsideLinkIcon } from '../../../../components/icons/OutsideLinkIcon'

import { useEffect, useState } from 'react'

import { api } from '../../../../lib/axios'

interface ProfileProps {
  avatar_url: string
  name: string
  bio: string
  html_url: string
  followers: number
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileProps>()

  useEffect(() => {
    getPostFromGithubApi()
  }, [])

  async function getPostFromGithubApi() {
    const response = await api.get<ProfileProps>(
      'http://api.github.com/users/gregolly',
    )

    setProfile(response.data)
  }

  return (
    <ProfileWrapper>
      <div>
        <img src={profile?.avatar_url} alt="" />
      </div>
      <ContentContainer>
        <h2>{profile?.name}</h2>
        <p>{profile?.bio}</p>
        <ListInfo>
          <NavLink to={profile?.html_url || ''}>
            <li>
              <GithubIcon width={18} height={18} />
              {profile?.name}
            </li>
          </NavLink>
          <li>
            <BuildingIcon width={18} height={18} />
            Rocketseat
          </li>
          <li>
            <UserGroupIcon width={18} height={18} />
            {profile?.followers} seguidores
          </li>
        </ListInfo>
        <NavLink className="navLink" to={profile?.html_url || ''}>
          github
          <OutsideLinkIcon width={18} height={18} />
        </NavLink>
      </ContentContainer>
    </ProfileWrapper>
  )
}
