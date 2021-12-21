import Link from "next/link";

const Menu = () => <>
<ul>
    <li><Link href="/"><a>Index</a></Link></li>
    <li><Link href="/page/1" as="/page/1"><a>Page 1</a></Link></li>
    <li><Link href="/page/[id]" as="/page/2"><a>Page 2</a></Link></li></ul></>;

export default Menu;