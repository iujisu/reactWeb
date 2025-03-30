/**
 * ES7+ React/Redux/React-Native snippets -확장프로그램
 * rafce -화면자동생성
*/
import React from 'react'
import SidePanel from './SidePanel/SidePanel';
import MainPanel from './MainPanel/MainPanel';

function ChatPage() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '300px' }}>
                <SidePanel />
            </div>
            <div style={{ width: '100%' }}>
                <MainPanel />
            </div>
        </div>
    )
}

export default ChatPage
