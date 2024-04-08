import React, { useEffect, useState } from "react";
import { List } from "@refinedev/chakra-ui";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { getApiUserList } from "../../services";

export const UserList: React.FC = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);
  const getUserList = () => {
    // getApiUserList().then((response: any) => {
    //   setUserList(response);
    // });
  };

  return (
    <List>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Email</Th>
              <Th>Name</Th>
              <Th>Birthday</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userList.map((user: any) => {
              return (
                <Tr key={user.id}>
                  <Td>{user.email}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.birthday}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {/* <Pagination
        current={current}
        pageCount={pageCount}
        setCurrent={setCurrent}
      /> */}
    </List>
  );
};
