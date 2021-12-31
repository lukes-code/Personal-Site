import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Content from '../components/Content'

export default function ContentSection(props) {
    return(
        <>
            <Title title={props.title}/>
            <SubTitle firstLine={props.firstLine} secondLine={props.secondLine} thirdLine={props.thirdLine} />
            <Content content={props.content} />
        </>
    );
}