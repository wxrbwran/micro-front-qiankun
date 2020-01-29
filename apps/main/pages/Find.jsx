/**
 * @author Kuitos
 * @since 2019-05-16
 */

import React from 'react';

export default function Login(props) {


  function goto(title, href) {
    window.history.pushState({}, title, href);
  }

  return (
    <>
      <header className="header">
        这是找回页面
        <a onClick={() => goto('登录', '/login')}>返回</a>
      </header>
    </>
  );
}
