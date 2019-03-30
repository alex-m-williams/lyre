import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <Link to={`/blog/${article.slug}`} className={styles.link}>
    <div className={styles.preview}>
      <Img alt="" sizes={article.heroImage.sizes} />
      <h3 className={styles.previewTitle}>
        {article.title}
      </h3>
      <small>{article.publishDate}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
      {article.genres && `Genres: ${article.genres.join(', ')}`}
    </div>
  </Link>
)
