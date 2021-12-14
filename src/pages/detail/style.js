import styled from 'styled-components';

export const DetailWrapper= styled.div`
    overflow : hidden;//涉及到 左浮动  右浮动 需要让 父元素 的BFC 触发出来
    width: 620px;
    margin: 0 auto;
    padding-bottom: 100px;
    // background: red;
`;

export const Header= styled.div`
    margin: 50px 0 20px 0;
    line-height: 44px;
    font-size: 34px;
    color : #333;
    font-weight: bold;

`;

export const Content= styled.div`

    color : #2f2f2f;
    img {
        width: 100%;
    }
    p {
        margin: 25px 0;
        font-size: 16px;
        line-height: 30px;
    }
    b {
        font-weight: bold;
    }


`;

