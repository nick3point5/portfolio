import {MikroORM} from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mircoConfig from "./mikro-orm.config"

const main = async () => {
    const orm = MikroORM.init(mircoConfig);

    const post = (await orm).em.create(Post, {title: 'my first post'});
    (await orm).em.persistAndFlush(post)


}

main();
