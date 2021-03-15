import { useModel } from '@alipay/bigfish';
import React from '@alipay/bigfish/react';
import { PageContainer } from '@alipay/tech-ui';
import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import styles from './style.less';

export default () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};
