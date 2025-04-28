import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function CardProJects() {
  return (
    <div className="col-span-12 md:col-span-3 lg:col-span-3">
        <Card className="flex h-full md:justify-center lg:justify-center md:items-center lg:items-center">
        <CardHeader >
          <CardTitle className="md:text-center">Projects</CardTitle>
          <CardDescription className="text-center">
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
      </Card>
      
    </div>
  );
}
