import {Table,BackTop} from 'antd';
import {connect} from 'dva';


function MyPage({list:dataSource,total,loading}){

    const column=[
        {
            title:'id',
            dataIndex:'id',
            key:'id',
            
        },
        {
            title:'title',
            dataIndex:'title',
            key:'title',
        },
        {
            title:'thumbnail',
            dataIndex:'thumbnailUrl',
            key:'thumbnailUrl',
            render:(text)=>(<img src={text} style={{width:40,height:40}} alt=''/>)
        }

    ]
    return(

        <div>
            <span>共计{total}条数据</span>
            <Table 
              dataSource={dataSource}
              rowKey={dataSource.id}
              columns={column}
              loading={loading}
              pagination={{
                defaultCurrent:1,
                pageSize:20,
              }}            
             />
              <BackTop style={{align:'center'}}/>

        </div>
    )
}

function mapStateToProps(state){
    const {list,total}=state.userPage;
    
    return {
        list,
        total,
        loading:state.loading.models.userPage,
    }

}

export default connect(mapStateToProps)(MyPage);