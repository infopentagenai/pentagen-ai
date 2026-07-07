import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import StatCard from "@/components/dashboard/StatCard";
import UsageChart from "@/components/dashboard/UsageChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";
import ProfileCard from "@/components/dashboard/ProfileCard";
import UsageCard from "@/components/dashboard/UsageCard";
import HistoryTable from "@/components/dashboard/HistoryTable";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-950">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <main className="flex-1 overflow-y-auto">

        <Topbar />

        <div className="space-y-8 p-8">

          {/* Welcome */}

          <WelcomeBanner />

          {/* Stats */}

          <StatCard />

          {/* Analytics */}

          <div className="grid gap-8 xl:grid-cols-2">

            <UsageChart />

            <RecentActivity />

          </div>

          {/* Bottom Section */}

          <div className="grid gap-8 xl:grid-cols-3">

            <div className="xl:col-span-2">

              <QuickActions />

            </div>

            <div className="space-y-8">

              <ProfileCard />

              <UsageCard />

              <HistoryTable />

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}