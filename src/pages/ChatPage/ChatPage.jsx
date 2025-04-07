/**
 * ES7+ React/Redux/React-Native snippets -확장프로그램
 * rafce -화면자동생성
*/
import React from 'react'
import SidePanel from './SidePanel/SidePanel';
import MainPanel from './MainPanel/MainPanel';
import TopPanel from '../TopPanel/TopPanel';

function ChatPage() {
    return (
        <div className="wrap">
            <div className="header">
                <TopPanel />
            </div> 
            <div className="content">
                <div className="aside"> <SidePanel /></div>
                <div className="main"><MainPanel /></div>
            </div>
        </div>
    )
}

export default ChatPage
