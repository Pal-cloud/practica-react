import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    { 
        userName: 'rainbow_rush', 
        name: 'Rainbow Rush', 
        isFollowing: true 
    },
    { 
        userName: 'valkyra_byte', 
        name: 'Valkyra Byte', 
        isFollowing: false 
    },
    { 
        userName: 'tech_guru', 
        name: 'Tech Guru', 
        isFollowing: true 
    },
    { 
        userName: 'code_master', 
        name: 'Code Master', 
        isFollowing: false 
    },
    { 
        userName: 'design_queen', 
        name: 'Design Queen', 
        isFollowing: true 
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard 
                            key={userName}
                            userName={userName} 
                            initialIsFollowing={isFollowing}
                            >
                            {name}
                        </TwitterFollowCard>
                ))
            }
    </section> 
    )
}