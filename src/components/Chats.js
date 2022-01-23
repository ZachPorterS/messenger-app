import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from 'firebase';

const Chats = () => {
    const history = useHistory();

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');
    }
    
    return (
        <div className='chats-page'>
            <div className='nav-bar'>
                <div className='logo-tab'>
                    ChatApp
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine height="calc(100vh - 66px)" projectId="41d1d239-c753-48da-a452-fb045a0e35e4" userName="." userSecret="."/>
        </div>

    );
}

export default Chats;