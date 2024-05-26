import * as React from 'react'
import Giscus from '@giscus/react'
import styles from './styles.module.css'

export const Comments: React.FC = () => {
  return (
    <div className={styles.giscusWrapper}>
      <div className={styles.giscus}>
        <Giscus
          id="comments"
          repo="Oh-noodles/nextjs-notion-starter-kit"
          repoId="R_kgDOGewpYQ"
          category="Announcements"
          categoryId="DIC_kwDOGewpYc4Cfh4c"
          mapping="pathname"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="transparent_dark"
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    </div>
  );
}
