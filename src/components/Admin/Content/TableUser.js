
const TableUser = (props) => {
    const { listUsers } = props;

    return (
        <div>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 && 
                    listUsers.map((user, index) => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button className="btn btn-secondary" onClick={()=>props.handleClickBtnView(user)}>View</button>
                                <button className="btn btn-warning mx-3" onClick={() => props.handleClickBtnUpdate(user)}>Update</button>
                                <button className="btn btn-danger" onClick={()=>props.handleClickBtnDelete(user)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    {listUsers && listUsers.length == 0 && <tr><td colSpan="4">No data found</td></tr>}
                </tbody>
            </table>
        </div>
    );
};

export default TableUser;
