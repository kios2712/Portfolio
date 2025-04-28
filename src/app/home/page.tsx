import CardCredentials from "@/components/molecules/CardCredentials";
import CardProfile from "@/components/molecules/CardProfile";
import CardProfiles from "@/components/molecules/CardProfiles";
import CardProjects from "@/components/molecules/CardProjects";
import CardServices from "@/components/molecules/CardServices";
import CardStatistics from "@/components/molecules/CardStatistics";
import CardTech from "@/components/molecules/CardTech";
import CardWork from "@/components/molecules/CardWork";
import GeneralTemplate from "@/components/templates/GeneralTemplate";

export default function Home() {
  return (

    <GeneralTemplate>
        <CardProfile></CardProfile>
        <CardCredentials></CardCredentials>
        <CardProjects></CardProjects>
        <CardTech></CardTech>
        <CardServices></CardServices>
        <CardProfiles></CardProfiles>
        <CardStatistics></CardStatistics>
        <CardWork></CardWork>
    </GeneralTemplate>
    
  );
}
