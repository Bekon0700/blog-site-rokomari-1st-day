import React from 'react'

const blog = {
    title: 'An Exciting, life long Service',
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--sqXFkEvv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1920px-Unofficial_JavaScript_logo_2.svg.png',
    author: 'Emdadul Islam',
    subTitle: 'Fascinating story about a Elephant and a dog.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequuntur dolorum dolores blanditiis nemo ex id mollitia? In vero voluptatibus beatae, veniam assumenda culpa eligendi excepturi eveniet repellat illo accusantium praesentium quod et atque placeat, error, fugiat saepe optio reprehenderit! Nisi, earum sequi, praesentium odit recusandae beatae numquam a eveniet magni nam dolor nulla laboriosam voluptatibus totam id facere quod consequuntur laborum! Necessitatibus a corrupti distinctio repellat accusamus facilis, enim reiciendis, autem veniam ex optio nulla aliquam eaque praesentium, reprehenderit velit! Facere neque, beatae amet enim maxime animi possimus delectus earum natus quod. Delectus nam quaerat odio accusamus illum quas temporibus sequi sint et nisi rerum odit cupiditate, amet veritatis, illo alias, nostrum optio corrupti cumque labore laboriosam sit unde. Ratione asperiores possimus voluptas non labore illo ipsa incidunt ex molestiae debitis modi nesciunt minima optio a voluptatem, impedit odio. Velit quam obcaecati iste repellendus unde. Necessitatibus ad veniam nihil fugiat quasi alias labore id facere consectetur possimus dignissimos expedita vel suscipit, illum, repudiandae fugit nulla dicta, totam amet sit. Voluptates unde laborum ea aut nostrum illum, architecto vel in repudiandae ad atque voluptatum assumenda magni corporis distinctio culpa soluta? Non, voluptatibus maiores at optio eum, nemo hic assumenda illo veritatis, dolore tenetur! Sint illum amet doloremque nobis excepturi repellat. Ab consectetur aspernatur maiores aperiam nemo, placeat, inventore laborum nobis ipsum nam corrupti sed excepturi, velit ad rerum quaerat ipsam. Dolorem expedita soluta voluptatem laborum quidem esse! Provident quis beatae incidunt fugiat, maiores laborum neque culpa voluptatibus quas libero dignissimos cum eum, a dolores, repudiandae reprehenderit. Eveniet ab voluptatibus vel incidunt asperiores repellat distinctio! Minus corrupti labore enim laborum architecto sapiente nesciunt eos in dolorem quod aspernatur deserunt ut ad nobis fugiat veniam repellat, voluptatem vitae dolore maxime exercitationem similique reprehenderit dolor? Totam culpa velit quod perferendis voluptatibus id praesentium aliquam odit perspiciatis officia, eaque aliquid numquam porro nihil, laboriosam ab sint, illo ipsa. Aspernatur qui fugiat alias nobis quos est illo, consequatur atque dolore iure repellat beatae minima, ipsam odio praesentium placeat adipisci recusandae quis totam? Recusandae expedita quibusdam non quia nam, itaque reiciendis numquam placeat nostrum! Suscipit vitae cum amet. Perspiciatis aperiam eius, sed incidunt minus expedita aspernatur eaque commodi repellat doloremque quisquam autem voluptates adipisci unde nesciunt impedit. Architecto sequi amet ducimus illo distinctio, autem minus doloribus provident? Qui assumenda hic voluptates quis accusamus eaque, repellat maiores pariatur consectetur at nobis aperiam placeat dolorum omnis ad odit explicabo magnam facilis nisi dolore fugiat aliquid! Perspiciatis accusantium esse sint quis beatae eos? Maiores iure amet totam! Ipsa illum similique, ab nesciunt, eum porro, quas ex hic praesentium consectetur mollitia at cumque maxime iste eligendi a reiciendis necessitatibus autem qui molestiae dignissimos nulla. Debitis, et quam? Corporis, placeat aliquam, assumenda fugit odio tempore blanditiis dolor a mollitia eaque dolorem itaque distinctio minus aut facere rem voluptatem? Magnam placeat illum cumque omnis iusto, impedit voluptatum quasi eaque saepe velit expedita dolorum, aliquam recusandae magni possimus libero sed porro at ipsum repellendus aliquid laborum error deserunt? Recusandae magnam voluptatibus quod dolores?',
    createdAt: '2 December 2022',
    lastUpdate: '8 December 2022',
    tags: ['wildLife', 'inspiring']
}


const SingleBlog = () => {
    return (
        <div className='single-blog-container'>
            <img src={blog.img} alt="" className='blog-img'/>
            <div className='blog-body'>
                <p className='blog-title'>{blog.title}</p>
                <p className='blog-subTitle'>{blog.subTitle}</p>
                <div className='blog-inside'>
                    <p className='blog-info'>{blog.author}, {blog.createdAt}</p>
                    <p className='blog-description'>{blog.description}</p>
                </div>
            </div>
            <div className='tags'>
                {
                    blog.tags.map((tag, id) => <p key={id}>#{tag}</p>)
                }
            </div>
        </div>
    )
}

export default SingleBlog