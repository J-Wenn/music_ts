import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 70px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;

  .content {
    display: flex;
    justify-content: space-between;
    ${(props) => props.theme.mixin.wrapv1}
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`
export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999999px;
  }

  .title-list {
    display: grid;
    grid-template-columns: repeat(6, 94px);
    height: 70px;
    .title-item {
      position: relative;
      height: inherit;
      cursor: pointer;
      a {
        color: #ccc;
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          display: block;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -190px 0;
          right: -35px;
          top: 20px;
        }
      }
      &:hover,
      .active {
        color: #fff;
        background-color: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
        background-position: -226px 0;
      }
    }
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    cursor: pointer;
    &:hover {
      border-color: #fff;
      color: #fff;
    }
  }

  .input {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 5px;
    padding-left: 5px;
    box-sizing: border-box;
    .MuiInputBase-root {
      display: inline-block;
      width: 120px;
      font-size: 12px;
    }
  }

  .login {
    cursor: pointer;
    &:hover {
      color: #999;
      text-decoration: underline;
    }
  }
`
