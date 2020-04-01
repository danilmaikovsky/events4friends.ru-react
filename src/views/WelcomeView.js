import React, { Component } from 'react'
import ButtonLink from '../components/ButtonLink'
import ButtonExternalLink from '../components/ButtonExternalLink'
import { AuthContext } from '../context/AuthContext'
import './WelcomeView.css'

class WelcomeView extends Component {
  render() {
    return (
      <div className="welcomeview">
        <div className="welcomeview__block">
          <AuthContext.Consumer>
            {({ user }) => {
              let userName = null
              if (user) {
                const { first_name, last_name, nickname } = user;
                if (first_name && last_name) {
                  userName = `${first_name} ${last_name}`
                } else if (nickname) {
                  userName = `${nickname}`
                } else if (first_name) {
                  userName = `${first_name}`
                }
              }
              return (
                <div className="container container-center">
                  { userName ? (
                      <div>
                        <span>Добро пожаловать в цифровое пространство, {userName}! </span>
                      </div>
                    ) : (
                      <div>
                        <span>Добро пожаловать в цифровое пространство!</span>
                      </div>
                    )
                  }
                </div>
              )
            }}
          </AuthContext.Consumer>
        </div>
        
        <div className="welcomeview__block">
          <div className="container container-center">
            <p>Мероприятия тут:</p>

            <ButtonLink 
              to="/list" 
              icon="/icons/icon_list.png"
              title="Открыть список"
              style={{ 
                width: 250,
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginBottom: 10
              }}
            />
{/* 
            <ButtonLink 
              to="/map" 
              icon="/icons/icon_map.png"
              title="Открыть карту"
              style={{ 
                width: 250,
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginBottom: 10
              }}
            /> */}
          </div>
        </div>

        <div className="welcomeview__block">
          <div className="container container-center">
            <p>Выберите мессенджер для общения:</p>
            <ButtonExternalLink 
              href="https://tglink.ru/events4friends" 
              icon="/icons/telegram.png" 
              style={{
                borderColor: "#139BD0",
                margin: 8
              }} 
            />
            <ButtonExternalLink 
              href="https://chat.whatsapp.com/DWUaZ1bsuxwJLALyvBYTt8" 
              icon="/icons/wa.png"
              style={{
                borderColor: "#57BB63",
                margin: 8
              }} 
            />
            <ButtonExternalLink 
              href="https://invite.viber.com/?g2=AQBA7jF9Y7%2BXBkqTI0PoYF%2BmnEMluxPdGZy8wJQ3PRPBLT%2BMeh344RxBuBUTVc6B"
              icon="/icons/viber.png" 
              style={{
                borderColor: "#7C519B",
                margin: 8
              }} 
            />
          </div>
        </div>

        <div className="welcomeview__block">
          <div className="container container-center">
            <p>Действует группа ВКонтакте:</p>            
            <ButtonExternalLink 
              href="https://vk.com/kldevents4friends"
              icon="/icons/vk.png" 
              style={{
                borderColor: "#4D76A1",
                margin: 8,
                width: 250,
                display: 'block',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
              title="Открыть ВКонтакте"
            />
          </div>
        </div>

        <div className="container container-center">
          <p className="welcomeview__footer">
            Здесь действуют правила поведения в общественных местах.
            Разработано в <a href="https://roscomputing.com/">Роскомпьютинг</a>.
          </p>
        </div>
      </div>
    )
  }
}

export default WelcomeView