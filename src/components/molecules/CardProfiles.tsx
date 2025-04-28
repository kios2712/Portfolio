import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function CardProfiles() {
  return (
    <div className="col-span-12 md:col-span-3 lg:col-span-3">
<Card className="flex lg:h-56 md:h-56">        <CardHeader>
          <CardTitle>Profiles</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
      </Card>
      
    </div>
  );
}
