import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function CardStatistics() {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-6 ">
<Card className="flex lg:h-56 md:h-56">        <CardHeader>
          <CardTitle> Statistics</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
      </Card>
      
    </div>
  );
}
