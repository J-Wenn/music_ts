import styled from 'styled-components'

export const AreaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 33px;
  padding: 0 10px 0 0;
  border-bottom: 2px solid #c10d0c;

  background: url(require('@/assets/img/sprite_02.png')) center no-repeat;
  background-position: -225px -156px;
  line-height: 33px;
`

export const HeaderLeft = styled.div`
  display: flex;
  .hot-title {
    margin-left: 30px;
    display: flex;
    margin-bottom: 5px;
    a {
      color: #333333;
      &:hover {
        text-decoration: none;
      }
    }
  }

  .keywords {
    display: flex;
    margin-left: 20px;
    color: #ccc;
    line-height: 35px;
    .item {
      a {
        text-decoration: none;
      }
      .line {
        margin: 0 10px;
      }
    }
  }
`

export const HeaderRight = styled.div`
  .icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    vertical-align: middle;
    background: transparent url('${require('@/assets/img/sprite_02.png')}')
      no-repeat center;
    background-position: 0 -240px;
  }
`
