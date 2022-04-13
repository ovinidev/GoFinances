import { FlatList } from "react-native";
import { Button } from "../../components/Button";
import { categories } from "../../utils/categories";
import {
  Container,
  Header,
  Icon,
  Name,
  Title,
  CategoryItem,
  Separator,
  Footer,
} from "./styles";

interface ICategory {
  key: string,
  name: string
}

interface CategoryProps {
  category: ICategory,
  setCategory: React.Dispatch<React.SetStateAction<{
    key: string;
    name: string;
    icon: string;
  }>>
  closeSelectCategory: () => void
}

export function Category({
  category,
  setCategory,
  closeSelectCategory,
}: CategoryProps) {

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        style={{ flex: 1, width: '100%' }}
        renderItem={({ item }) => (
          <CategoryItem
            onPress={() => setCategory(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </CategoryItem>
        )}
        ItemSeparatorComponent={Separator}
      />

      <Footer>
        <Button
          title='Selecionar'
          onPress={closeSelectCategory}
        />
      </Footer>
    </Container>
  )
}