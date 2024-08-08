import { Button, ConfigProvider, Flex } from 'antd';

export default function Home() {
  return (
    <main className="">

      <Flex gap="small" wrap>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                /* here is your component tokens */
              },
            },
          }}
        >
          <Button className=" bg-black hover:bg-slate-600" style={{}} type="primary">Primary Button</Button>
        </ConfigProvider>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
    </main>
  );
}
