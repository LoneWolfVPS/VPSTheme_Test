import { Theme, css } from 'antd-style';

export default (token: Theme) => css`
  body {
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  .ant-tooltip-inner {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: unset;
    padding: 4px 8px;

    color: ${token.colorBgLayout};

    background-color: ${token.colorText} !important;
    border-radius: ${token.borderRadiusSM}px;
  }

  .ant-tooltip-arrow {
    &::before,
    &::after {
      background: ${token.colorText} !important;
    }
  }

  .ant-tabs-ink-bar,
  .ant-btn-primary,
  .ant-switch-checked {
    background: ${token.colorPrimary} !important;
  }
`;
