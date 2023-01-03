import fs from 'fs';
import matter from 'gray-matter';

const getPostsData = () => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownContent = files.filter((file) => file.endsWith('.md'));

  //gray matter data from files
  const posts = markdownContent.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};

export default getPostsData;
